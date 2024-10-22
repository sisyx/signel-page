import { customAlert } from '../App';
import Landing from '../components/Landing';
import Sign from '../components/Sign';
import Pele from '../components/Pele';
import About from '../components/About';
import Slides from '../components/Slides';
import Stats from '../components/Stats';
import About2 from '../components/About2';
import Supporters from '../components/Supporters';
import CurrentOrgans from '../components/CurrnentOrgans';
import Footer from '../components/Footer';
const filesBase = "wwroot";
export const root = "https://webproteam.info";

function Admin() {

    return ( 
        <div>
            <Landing getFile={getFile} isAdmin={true} uploadFile={uploadFile} />
            <Sign />
            <Pele getFile={getFile} isAdmin={true} uploadFile={uploadFile} />
            <About getFile={getFile} isAdmin={true} uploadFile={uploadFile} />
            <About2 getFile={getFile} isAdmin={true} uploadFile={uploadFile} />
            <div className='w-screen flex justify-center'>
              <div className='max-w-4xl w-full'>
                <Slides getFile={getFile} isAdmin={true} uploadFile={uploadFile} />
              </div>
            </div>
            <Stats isAdmin={true} />
            <Supporters getFile={getFile} isAdmin={true} uploadFile={uploadFile} />
            <CurrentOrgans  getFile={getFile} isAdmin={true} uploadFile={uploadFile} />
            <Footer isAdmin={true} getFile={getFile} uploadFile={uploadFile} />
        </div>
     );
}

export default Admin;

export async function uploadFile(path: string, file: File)  {
    const reader = new FileReader();

    reader.readAsDataURL(file);
    const extension = getFileExtension(file.name)
    reader.onload = async function() {
        const filedata = reader.result

        if (extension === ".svg") {
            customAlert("فایل با فرمت SVG پشتیبانی نمیشود. لطفا عکس دیگری انتخاب کنید.");
            return
        }

        try {
            const data = {
                filedata,
                fileName: `${Date.now()}${extension}`,
                filePath: `${filesBase}${path}`
            }
            console.log(data)

            const req = await fetch(`${root}/Uploads/UploadFile`, {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                }
            });

            console.log(req);

            if (!req.ok) {
                throw new Error("failed to send file");
            }

            const res = await req.json();
            customAlert(res.message)

        } catch (error: any) {
            customAlert("Failed To Upload File")
            console.log(error.message)
        }
    }
}

    export function getCookie(name: string): string | undefined {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts?.pop()?.split(';').shift();
    }

    export function getFileExtension(filename: string): string {
        const lastDotIndex = filename.lastIndexOf('.');
        const fileExtension = filename.slice(lastDotIndex);
        return fileExtension;
    }

    export function getFilenameNoExt(filename: string) {
        const lastDotIndex = filename.lastIndexOf('.');
        const filenameNoExt = filename.slice(0, lastDotIndex);
        return filenameNoExt;
    }


export async function getFile(filepath: string, filename: string) {    
    const data = {
        fileName: "",
        filePath: `${filesBase}${filepath}`,
        filedata: ""
    }
    try {
        const req = await fetch(`${root}/Uploads/getFiles`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            }
        })

        if (!req.ok) {
            throw new Error("Failed to get files");
        }

        const res = await req.json();

        let fileurl;

        interface ObjectResultShape {
            fileName: string,
            filePath: string,
            filedata: string,
        }
        let extension;
        if (res.objectResult.length) {
            const array = res.objectResult;
            const profile = array
            .filter((file: ObjectResultShape) => !!Number(getFilenameNoExt(file.fileName)))
            .sort((filea: ObjectResultShape, fileb: ObjectResultShape) => getFilenameNoExt(filea.fileName) < getFilenameNoExt(fileb.fileName))[0];
            fileurl = profile.filePath;
            extension = getFileExtension(profile.fileName)
        }

        if (!!fileurl) {
            const req2 = await fetch(`${root}/Uploads/downloadFile?url=${fileurl}`, {
                method: "POST",
                headers: {
                    // "Content-Type": "text/plain",
                    // "Authorization": `Bearer ${token}`
                }
            });

            if (!req2.ok) {
                throw new Error("Failed To Download profile");
            }

            const res1 = await req2.json();

            const fileData = !!res1.objectResult ? res1.objectResult : "r¶¬\u0085ç_\u008aW";
            const dataUrl = `data:image/${extension?.slice(1)};base64,${fileData}`;

            return dataUrl;
        }
    } catch (error: any) {
        console.log(error.message);
        return 0;
    }
}
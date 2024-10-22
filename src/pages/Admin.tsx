import { useEffect } from 'react';
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
    function updloadNewFile(xfile: File, directory: string = "unnameddir") {
        const reader = new FileReader();

        reader.onload = function (event) {
            const filecontent = document.querySelector<HTMLImageElement>(".camp-profile-img");
            if (filecontent && event.target && typeof event.target.result === "string" ) {
                filecontent.src = event.target.result;
            }
        }

        reader.readAsDataURL(xfile);
        const newProfilePath = `campaign_profiles/${directory}`
        uploadFile(newProfilePath, xfile)
    }

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
            <Supporters />
            <CurrentOrgans />
            <Footer isAdmin={true} getFile={getFile} uploadFile={uploadFile} />
        </div>
     );
}

export default Admin;

export async function uploadFile(path: string, file: File)  {
    console.log(file)
    // const token = getCookie("token");
    const reader = new FileReader();

    reader.readAsDataURL(file);
    const extension = getFileExtension(file.name)
    if (!extension.toLowerCase().includes("jpeg")) {
        customAlert("لطفا فایلی با فرمت jpeg انتخاب کنید");
        return
    }
    reader.onload = async function() {
        const filedata = reader.result

        try {
            const data = {
                filedata,
                fileName: `image${extension}`,
                filePath: `${filesBase}${path}`
            }
            console.log(data)

            const req = await fetch(`${root}/Uploads/UploadFile`, {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                    // "Authorization": `Bearer ${token}`
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

  export function getFileExtension(filename: string) {
    const lastDotIndex = filename.lastIndexOf('.');
    const fileExtension = filename.slice(lastDotIndex);
    return fileExtension; 
}


export async function getFile(filepath: string, filename: string) {    
    // const token = getCookie("token");

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
                // "Authorization": `Bearer ${token}`,
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

        if (res.objectResult.length) {
            const array = res.objectResult;
            const profile = array.find((file: ObjectResultShape) => file?.fileName.startsWith(filename));
            fileurl = profile.filePath;
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
            const dataUrl = `data:image/jpeg;base64,${fileData}`;

            return dataUrl;
        }
    } catch (error: any) {
        console.log(error.message);
        return 0;
    }
}
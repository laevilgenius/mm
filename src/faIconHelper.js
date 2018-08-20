import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faTimes, faDownload, faCheck, faSyncAlt, faBackward,
    faFolderOpen, faInfoCircle, faFolder, faHome, faPlus
} from '@fortawesome/free-solid-svg-icons'
import {
    faFolder as farFolder,
    faFile, faFileAlt,
    faFilePdf, faFileWord, faFileExcel, faFilePowerpoint,
    faFileCode, faFileVideo, faFileAudio, faFileArchive
} from '@fortawesome/free-regular-svg-icons'


const faIconMatchExtension = new Map([
    [faFileAlt, ['txt']],
    [faFilePdf, ['pdf']],
    [faFileWord, ['doc', 'docx']],
    [faFileExcel, ['xls', 'xlsx']],
    [faFilePowerpoint, ['ppt', 'pptx']],
    [faFileCode, ['html', 'php', 'js', 'cs', 'java']],
    [faFileVideo, ['avi', 'mpg', 'mpeg', 'mp4', 'mov']],
    [faFileAudio, ['mp3', 'wav', 'flac', 'ogg']],
    [faFileArchive, ['zip', 'rar', '7z', 'tar', 'gz', 'tgz']],
])


library.add(
    faTimes, faDownload, faCheck, faSyncAlt, faBackward,
    faFolderOpen, faInfoCircle, faFolder, faHome, faPlus,
    farFolder, faFile, ...faIconMatchExtension.keys()
)


export function getFaIcon(file) {
    if (file.type == 'dir') {
        return farFolder;
    }
    const matchingIcon =
        [...faIconMatchExtension].find(
            ([, extensions ]) => extensions.indexOf(file.extension) >= 0
        )
    return matchingIcon ? matchingIcon[0] : faFile
}

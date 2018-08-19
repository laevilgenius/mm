const faIconMatchExtension = {
    'file-alt': ['txt'],
    'file-pdf': ['pdf'],
    'file-word': ['doc', 'docx'],
    'file-excel': ['xls', 'xlsx'],
    'file-powerpoint': ['ppt', 'pptx'],
    'file-code': ['html', 'php', 'js', 'cs', 'java'],
    'file-video': ['avi', 'mpg', 'mpeg', 'mp4', 'mov'],
    'file-audio': ['mp3', 'wav', 'flac', 'ogg'],
    'file-archive': ['zip', 'rar', '7z', 'tar', 'gz', 'tgz'],
}

export default class FaIconClassHelper {
    static getFaIconClass(file) {
        let str = 'far fa-fw fa-';
        if (file.type == 'dir') {
            return str + 'folder';
        }
        const matchingIcon =
            Object.entries(faIconMatchExtension).find(
                ([, extensions ]) => extensions.indexOf(file.extension) >= 0
            )
        str += matchingIcon ? matchingIcon[0] : 'file'
        return str;
    }
}

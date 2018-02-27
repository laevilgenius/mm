const faIconMatchExtension = [
    {
        name: 'file-text-o',
        extensions: ['txt']
    },
    {
        name: 'file-pdf-o',
        extensions: ['pdf']
    },
    {
        name: 'file-word-o',
        extensions: ['doc', 'docx']
    },
    {
        name: 'file-excel-o',
        extensions: ['xls', 'xlsx']
    },
    {
        name: 'file-powerpoint-o',
        extensions: ['ppt', 'pptx']
    },
    {
        name: 'file-code-o',
        extensions: ['html', 'php', 'js', 'cs', 'java']
    },
    {
        name: 'file-video-o',
        extensions: ['avi', 'mpg', 'mpeg', 'mp4', 'mov']
    },
    {
        name: 'file-audio-o',
        extensions: ['mp3', 'wav', 'flac', 'ogg']
    },
    {
        name: 'file-archive-o',
        extensions: ['zip', 'rar', '7z', 'tar', 'gz', 'tgz']
    },
]

export default class FaIconClassHelper {
    static getFaIconClass(file) {
        let str='fa fa-fw fa-';
        if (file.type=='dir') {
            return str+'folder';
        }
        var matchingIcon = 
            faIconMatchExtension.find(
                iconMatch => iconMatch.extensions.indexOf(file.extension) >= 0
            )
        if (matchingIcon) {
            str += matchingIcon.name
        } else {
            str += 'file-o'
        }

        return str;
    }
}
export default function getRedirectPath({type, avatar}) {
    let url = (type === 'employer') ? '/employer': '/candidate'
    if (!avatar) {
        url += '/profile'
    }
    return url
}

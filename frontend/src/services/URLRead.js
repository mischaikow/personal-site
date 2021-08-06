

const getPage = ({ location }) => {
    const searchParams = new URLSearchParams(location);
    let ans = {
        page: searchParams.get('page') || 'home',
        blog: searchParams.get('blog') || ''
    }

    return ans;
}

export default { getPage };
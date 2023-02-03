import fetchPosts from "./fetch_posts"

const fetchCategories = () => {
    const categories = new Set<string>()

    fetchPosts().map((post) => categories.add(post.category))

    return categories
}

export default fetchCategories
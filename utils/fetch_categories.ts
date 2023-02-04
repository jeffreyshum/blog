import fetchPosts from "./fetch_posts"

const fetchCategories = () => {
    const categories = new Set<string>()

    fetchPosts().map((post) => categories.add(post.category))

    return categories
}


const fetchCategoriesAndCounts = () => {
    const categoriesAndCounts = new Map<string, number>()
    
    fetchPosts().map((post) => {
        if (categoriesAndCounts.has(post.category)) {
            categoriesAndCounts.set(post.category, categoriesAndCounts.get(post.category)! + 1) 
        } else {
            categoriesAndCounts.set(post.category, 1)
        }
    })

    return categoriesAndCounts
}

export { fetchCategories, fetchCategoriesAndCounts }
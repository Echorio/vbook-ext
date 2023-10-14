function execute(key, page) {
    if (!page) page = "0";
    let response = fetch("https://buondua.com/", {
        method: "GET",
        queries: {
            "f_search": key,
            "page": page
        }
    });
    if (response.ok) {
        let doc = response.html();
        let div = doc.select(".pagination-list").first()
        let el = div.select("span")
        let data = [];
        for (let i = el.size() - 1; i >= 0; i--) {
            let e = el.get(i);
            data.push({
                name: e.select("a").text(),
                url: encodeURIComponent(e.select("a").attr("href")).replace("%2F","/"),
                cover: e.select(".img").attr("src"),
                host: "https://buondua.com/"
            })
        }
        return Response.success(data, next);
    }
    return null;
}
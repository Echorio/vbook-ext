function execute(key, page) {
    if (!page) page = "0";
    let response = fetch("https://buondua.com/?search="+key+"/?start="+page);
    if (response.ok) {
        let doc = response.html();
        let div = doc.select(".pagination-list").first()
        let el = div.select("span")
        let data = [];
        for (let i = el.size() - 1; i >= 0; i--) {
            let e = el.get(i);
            data.push({
                name: e.select("a").text(),
                link: e.select("a").attr("href"),
                cover: e.select(".img").attr("src"),
                host: "https://buondua.com/"
            })
        }
        // var next = /\&start=\/(\d+)\//.exec(doc.select(".pagination-list").attr("href"));
        // if (next) next = next[1];
        // else next = "";
        return Response.success(data.reverse());
    }
    return null;
}
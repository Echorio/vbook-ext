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
        let el = doc.select(".item-link.popunder href");
        let cover = doc.select(".img.loading src");
        for (let i = 1; i < el.length; i++) {
            let e = el.get(i);
            data.push({
                link: e.select(".item-link.popunder").first().attr("href"),
                name: e.select(".item-link").text(),
                cover: cover,
                host: "https://buondua.com/"
            })
        }
        return Response.success(data);
    }
    return null;
}
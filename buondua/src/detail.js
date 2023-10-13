function execute(url) {
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        return Response.success({
            name: doc.select(".title").first().text(),
            cover: doc.select("og:image").attr("content"),
            host: "https://buondua.com/"
        });
    }
    return null;
}
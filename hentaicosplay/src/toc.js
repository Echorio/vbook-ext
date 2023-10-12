function execute(url) {
    let id = /hentai-cosplays.com\/(image|story)\/([a-z0-9-]+)\/?/.exec(url);

    if (id) id = id[2];
    let response = fetch("https://hentai-cosplays.com/image/" + id + "/");

    let data = [];
    data.push({
        name: response.html().select("#title").text(),
        url: "https://hentai-cosplays.com/story/" + id
    })

    return Response.success(data);
}
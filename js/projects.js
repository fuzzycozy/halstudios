
//////////// json 불러오기 ////////////////////

let data;


$.ajax({
    url: "data.json",
    success: function (json) {
        data = json;
        console.log(data)
        projects();
    },
    error: function (xhr) {
        console.log(xhr.status + "/" + xhr.errorText);
    }
})

function projects() {
    let elThumb = '';

    $.each(data.projects, function (k, v) {
        elThumb += `
        <li class="list">
        <div class="project">
            <a href="lookbook.html">
                <figure>
                    <img src="${v.thumb}">
                </figure>
                <p class="project_title">
                        ${v.title}
                        <span class="key">${v.key}</span>
                </p>
            </a>
        </div>
    </li>
    `;
        $('.section ul').html(elThumb);
    })
}


// 각 썸네일 클릭시 원하는 값의 lookbook 페이지로 이동 .let list='';
setTimeout(function () {

    $('.list').each(function (k, v) {

        $(v).on('click', function () {
            list = $('.key').eq(k).text()
            localStorage.setItem("key1", list);
            location.href = $(this).find('a').attr('href');
        });
    })
}, 100)
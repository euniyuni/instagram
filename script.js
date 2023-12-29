document.addEventListener("DOMContentLoaded",
    function(e){
        let configID=document.querySelector("#id i")
        let idText=document.querySelector("#id span")

        configID.addEventListener("click",
            function(e){
                idText.textContent=prompt("새로운 아이디를 입력하세요")
            }        
        )

        let profile_pic=document.querySelector("#profile_pic .circle_pic")
        profile_pic.addEventListener("mouseover",
            function(e){
                e.target.style.filter="grayscale(50%)"
            }
        )

        profile_pic.addEventListener("mouseleave",
            function(e){
                e.target.style.filter="grayscale(0%)"
            }
        )

        profile_pic.addEventListener("click",
            function(e){
                profile_pic.setAttribute("src",prompt("이미지 url을 입력해주세요"))
            }
        )
    }
)


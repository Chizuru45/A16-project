const item = document.querySelectorAll('.foto');
const nama = document.querySelector('.nama');
const asal = document.querySelector('.asal');
const data = [
    {
        nama: "Edo Hardianto B",
        asal: "Medan",
        gambar: "hardi.jpg"
    },
    {
        nama: "Benyamin Netanyahu",
        asal: "Surabaya",
        gambar: "ben.jpg"
    },
    {
        nama: "Cendykia Ditto P",
        asal: "Grobogan",
        gambar: "ditto.jpg"
    },
    {
        nama: "Catur Arif F",
        asal: "Depok",
        gambar: "catur.jpg"
    },
    {
        nama: "Darsah Wendanado",
        asal: "Bengkulu",
        gambar: "darsah.jpg"
    }
];
let i = -1;
let j = 0;
let k = 1;
let l = 2;
let m = 3;
function show(){
    if(item[2].getAttribute('class') === 'geser'){
        item[0].classList.remove('geser');
        item[1].classList.remove('geser');
        item[2].classList.remove('geser');
        item[3].classList.remove('geser1');
        item[4].classList.remove('geser1');
        nama.classList.remove('geser');
        asal.classList.remove('geser');
        if(m < data.length){
            m++;
            if(m === 5){
                m = 0;
                item[4].setAttribute('src',`photo/${data[m].gambar}`);
            }else{
                item[4].setAttribute('src',`photo/${data[m].gambar}`);
            }
        }
        if(l < data.length){
            l++;
            if(l === 5){
                l = 0;
                item[3].setAttribute('src',`photo/${data[l].gambar}`);
            }else{
                item[3].setAttribute('src',`photo/${data[l].gambar}`);
            }
        }
        if(k < data.length){
            k++;
            if(k === 5){
                k = 0;
                item[2].setAttribute('src',`photo/${data[k].gambar}`);
                nama.innerHTML = data[k].nama;
                asal.innerHTML = data[k].asal;
            }else{
                item[2].setAttribute('src',`photo/${data[k].gambar}`);
                nama.innerHTML = data[k].nama;
                asal.innerHTML = data[k].asal;
            }
        }
        if(j < data.length){
            j++;
            if(j === 5){
                j = 0;
                item[1].setAttribute('src',`photo/${data[j].gambar}`);
            }else{
                item[1].setAttribute('src',`photo/${data[j].gambar}`);
            }
        }
        if(i < data.length){
            i++;
            if(i === 5){
                i = 0;
                item[0].setAttribute('src',`photo/${data[i].gambar}`);
            }else{
                item[0].setAttribute('src',`photo/${data[i].gambar}`);
            }
        }
        setTimeout(() => {
            show();
        }, 5000);
    }else{
        item[0].setAttribute('class','geser');
        item[1].setAttribute('class','geser');
        item[2].setAttribute('class','geser');
        item[3].setAttribute('class','geser1');
        item[4].setAttribute('class','geser1');
        nama.setAttribute('class','geser');
        asal.setAttribute('class','geser');
        setTimeout(() => {
            show();
        }, 500);
    }
}
show();

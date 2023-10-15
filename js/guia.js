
const eqvi = document.getElementById("bqv");
eqvi.addEventListener("mouseover", cambiarQueVerIN);
eqvi.addEventListener("mouseout", cambiarQueVerOUT);

const eqci = document.getElementById("bqc");
eqci.addEventListener("mouseover", cambiarQueComerIN);
eqci.addEventListener("mouseout", cambiarQueComerOUT);

const edii = document.getElementById("bdi");
edii.addEventListener("mouseover", cambiarDondeIrIN);
edii.addEventListener("mouseout", cambiarDondeIrOUT);

const eri = document.getElementById("bhr");
eri.addEventListener("mouseover", cambiarResevaIN);
eri.addEventListener("mouseout", cambiarResevaOUT);
const di = document.getElementById("bdr");
di.addEventListener("mouseover", cambiarDescubreIN);
di.addEventListener("mouseout", cambiarDescubreOUT);


const bus = document.getElementById("bus");
bus.addEventListener("mouseover", cambiarTransporteIN);
bus.addEventListener("mouseout", cambiarTransporteOUT);


function cambiarQueVerIN() {
    document.getElementById("bqv").style.backgroundColor = "Black";
    document.getElementById("iqv").src = "/images/icono/QueVerHover.png";
    document.getElementById("tqv").style.color = "white";
}
function cambiarQueVerOUT() {
    document.getElementById("bqv").style.backgroundColor = "darkgray";
    document.getElementById("iqv").src = "/images/icono/QueVer.png";
    document.getElementById("tqv").style.color = "black";

}
function cambiarQueComerIN() {
    document.getElementById("bqc").style.backgroundColor = "Black";
    document.getElementById("iqc").src = "/images/icono/QueComerHover.png";
    document.getElementById("tqc").style.color = "white";
}
function cambiarQueComerOUT() {
    document.getElementById("bqc").style.backgroundColor = "darkgray";
    document.getElementById("iqc").src = "/images/icono/QueComer.png";
    document.getElementById("tqc").style.color = "black";
}
function cambiarDondeIrIN() {
    document.getElementById("bdi").style.backgroundColor = "Black";
    document.getElementById("idi").src = "/images/icono/DondeDormirHover.png";
    document.getElementById("tdi").style.color = "white";
}
function cambiarDondeIrOUT() {
    document.getElementById("bdi").style.backgroundColor = "darkgray";
    document.getElementById("idi").src = "/images/icono/DondeDormir.png";
    document.getElementById("tdi").style.color = "black";
}
function cambiarResevaIN() {
    document.getElementById("bhr").style.backgroundColor = "Black";
    document.getElementById("ihr").src = "/images/icono/ReservarHover.png";
    document.getElementById("thr").style.color = "white";
}
function cambiarResevaOUT() {
    document.getElementById("bhr").style.backgroundColor = "darkgray";
    document.getElementById("ihr").src = "/images/icono/Reservar.png";
    document.getElementById("thr").style.color = "black";
}
function cambiarDescubreIN() {
    document.getElementById("bdr").style.backgroundColor = "Black";
    document.getElementById("idr").src = "/images/icono/descubreHover.png";
    document.getElementById("tdr").style.color = "white";
}
function cambiarDescubreOUT() {
    document.getElementById("bdr").style.backgroundColor = "darkgray";
    document.getElementById("idr").src = "/images/icono/descubre.png";
    document.getElementById("tdr").style.color = "black";
}


function cambiarTransporteIN() {
    document.getElementById("bus").style.backgroundColor = "Black";
    document.getElementById("busi").src = "/images/icono/BusHover.png";
    document.getElementById("bust").style.color = "white";
}
function cambiarTransporteOUT() {
    document.getElementById("bus").style.backgroundColor = "darkgray";
    document.getElementById("busi").src = "/images/icono/Bus.png";
    document.getElementById("bust").style.color = "black";
}
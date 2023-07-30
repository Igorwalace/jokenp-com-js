

    var imgs = document.querySelectorAll('.main [play]')
    var atrPlay = ''; 
    var atrMaq = ''; 

    for(var i = 0; i < imgs.length; i++){
        imgs[i].addEventListener('click', function(t){
            resetarOpacityPlayer();
            t.target.style.opacity = 1;
            atrPlay = t.target.getAttribute('play')
            // alert(atrPlay)
            maquinaJogar();
        })
    }

    function resetarOpacityPlayer(){
        for(var i = 0; i < imgs.length; i++){
           imgs[i].style.opacity = 0.4;
        }
    }

    function resetarOpacityMaquina(){
        var maquina = document.querySelectorAll('.maquina img')
        for(var i = 0; i < maquina.length; i++){
                maquina[i].style.display = 'none'
        }
    }
    function maquinaJogar(){
        let rann = Math.floor(Math.random()*3)
        var maquina = document.querySelectorAll('.maquina img')    
        resetarOpacityMaquina();
        for(var i = 0; i < maquina.length; i++){
            if(i == rann){
                maquina[i].style.display = 'block' 
                maquina[i].style.opacity = 1 
                atrMaq = maquina[i].getAttribute('maq')
                // alert(atrMaq)
                
            }
            }

        // //verifição para decidir o vencendor!!

    verificação()
    function verificação(){
        var h1 = document.getElementById('h1')
        if(atrPlay == 'papel'){
            if(atrMaq == 'papel'){
                h1.innerHTML = `<h1 style="color: white; padding-bottom: 10px;">Papel e Papel.</h1><h1 style="color: blue">Empatou!</h1>`
                cliqueTela()
            } else if(atrMaq == 'pedra'){
                h1.innerHTML = `<h1 style="color: white; padding-bottom: 10px;">Papel e Pedra.</h1><h1>Você ganhou!</h1>`
                cliqueTela()
            }else if(atrMaq == 'tesoura'){
                h1.innerHTML = `<h1 style="color: white; padding-bottom: 10px;">Papel e Tesoura.</h1><h1 style="color: red">Você perdeu!</h1>`
                cliqueTela()
            }
        }
        if(atrPlay == 'pedra'){
            if(atrMaq == 'papel'){
                h1.innerHTML = `<h1 style="color: white; padding-bottom: 10px;">Pedra e Papel.</h1><h1 style="color: red">Você perdeu!</h1>`
                cliqueTela()
            } else if(atrMaq == 'pedra'){
                h1.innerHTML = `<h1 style="color: white; padding-bottom: 10px;">Pedra e Pedra.</h1><h1 style="color: blue">Empatou!</h1>`
                cliqueTela()
            }else if(atrMaq == 'tesoura'){
                h1.innerHTML = `<h1 style="color: white; padding-bottom: 10px;">Pedra e Tesoura.</h1><h1>Você ganhou!</h1>`
                cliqueTela()
            }
        }
        if(atrPlay == 'tesoura'){
            if(atrMaq == 'papel'){
                h1.innerHTML = `<h1 style="color: white; padding-bottom: 10px;">Tesoura e Papel.</h1><h1>Você ganhou!</h1>`
                cliqueTela()
            } else if(atrMaq == 'pedra'){
                h1.innerHTML = `<h1 style="color: white; padding-bottom: 10px;">Tesoura e Pedra.</h1><h1 style="color: red">Você perdeu!</h1>`
                cliqueTela()
            }else if(atrMaq == 'tesoura'){
                h1.innerHTML = `<h1 style="color: white; padding-bottom: 10px;">Tesoura e Tesoura.</h1><h1 style="color: blue">Empatou!</h1>`
                cliqueTela()
            }
            }
    }
    }
    function cliqueTela(){
        var el = document.querySelectorAll('.teste')[0];
        var imgAttr = document.querySelector('[one]')
        el.style.display = 'block';
        imgAttr.addEventListener('click',()=>{
            el.style.display = 'none';
        })
    }
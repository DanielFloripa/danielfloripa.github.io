<!DOCTYPE HTML>
<html> <!-- class="loading"-->
<head>
    <title>CHAVE Project</title>
    <meta http-equiv="content-type" content="text/html; charset=utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta name="description" content="GreenHop Project"/>
    <meta name="keywords" content="GreenHop; monitoring, data center; energy efficiency; power usage effectiveness"/>
    <meta name="referrer" content="origin"/>
    <link rel="import" href="../ico/icons.html">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="/ico/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">
    <script src="/js/jquery.min.js"></script>
    <script src="/js/jquery.scrolly.min.js"></script>
    <script src="/js/jquery.scrollzer.min.js"></script>
    <script src="/js/skel.min.js"></script>
    <script src="/js/skel-layers.min.js"></script>
    <script src="/js/init.js"></script>
    <script src="code.jquery.com/jquery-1.10.2.js"></script>
    <link rel="stylesheet" href="/css/skel.css"/>
    <link rel="stylesheet" href="/css/style.css"/>
    <link rel="stylesheet" href="/css/style-wide.css"/>
    <script>
        $(function(){$("#footer").load("/footer.html");});
    </script>
    <!--[if lte IE 9]>
    <link rel="stylesheet" href="/css/ie/v9.css"/><![endif]-->
    <!--[if lte IE 8]>
    <link rel="stylesheet" href="/css/ie/v8.css"/><![endif]-->
</head>
<body>

<!-- Header -->
<div id="header" class="skel-layers-fixed entry-header">

    <div id="loader-wrapper">
        <div id="loader"></div>
        <div class="loader-section section-left"></div>
        <div class="loader-section section-right"></div>
    </div>

    <div class="top">
        <header>
            <h1 class="entry-title">GreenHop Project</h1>
        </header>
        <!-- Logo -->
        <div id="logo">
            <a href="#top" class="image avatar48"><img src="../images/greenhop.jpg"/></a><br>
        </div>
        <!-- Nav -->
        <nav id="nav">
            <ul>
                <li>
                    <a href="#top" id="top-link" class="skel-layers-ignoreHref"><span class="icon fa-tags">Description</span></a>
                </li>
                <li>
                    <a href="#install" id="install-link" class="skel-layers-ignoreHref"><span class="icon fa-check-circle">Install</span></a>
                </li>
                <li>
                    <a href="#sources" id="sources-link" class="skel-layers-ignoreHref"><span class="icon fa-sort-alpha-down">Sources</span></a>
                </li>
                <li>
                    <a href="../index.html" id="return" class="skel-layers-ignoreHref"><span class="icon fa-home">Back to home</span></a>
                </li>
            </ul>
        </nav>
    </div>

</div>

<!-- Main -->
<div id="main">

    <!-- Personal -->
    <section id="top" class="two">
        <div class="site-content">
            <div class="boxed-group">
                <h4>Latest version 2.1</h4>
                <div class="boxed-group-inner">
                    <p style="text-align: center"> <a href="https://github.com/DanielFloripa/GreenHop/archive/v1.2.zip"> available on GitHub <i class="icon fa-github"></i>.</a>
                    </p>
                </div>
            </div>
        </div>
        <div class="container">
            <header>
                <h3>GreenHop</h3>
                 OpenSource hardware and software for energy efficiency and environmental monitoring in realtime based on Arduino and ZigBee protocol.
            </header>

            <p style="text-align: justify" >
                GreenHop aims to perform energy and environmental (temperature, umidity, dew point and atmospheric pressure)
                monitoring of the Data Center server room. providing energy efficiency indicators through green metrics for Data Centers.

                The GreenHop solution is totaly based on open source software and hardware.

                This approach enables its deployment easier and independently of suppliers, at the same time makes the solution scalable to
                 the needs of each organization.

                Thus, we aim to provide ambiental monitoring of the Data Center server room while we keep the system to be customizable
                to implement and replicate.

                Feel free to contact us. If you like to help in this project: daniel.supervisao
                 <strong class="icon fa-at" style="font-size:14px"></strong> gmail.com.

                The GreenHop project is part of undergraduate dissertation from Daniel Camargo, and
                is available under <a href="https://www.apache.org/licenses/LICENSE-2.0"> Apache 2.0 </a> license.

                The graduate degree was given in <a class="icon fa-university" href="http://www.udesc.br/cct/computacao">
                Bachelor in Computer Science at UDESC </a> and
                <a class="icon fa-flask" href="http://labp2d.joinville.udesc.br/index.php/en/"> LabP2D</a>.

                The source code is available in <a class="icon fa-github-alt" href="https://github.com/DanielFloripa/greenhop/"> GitHub Repository. </a>
                </p>
        </div>
    </section>

    <!-- summary -->
    <section id="install" class="three">
        <div class="container">

            <header>
                <h2>Install guide</h2>
            </header>
            Em breve este tutorial estará completo e terá um passo-a-passo completo de como montar a solução de monitoramento para a sua sala de servidores.

            <h3>Arduino:</h3>
            pasta Arduino possui o código que deve ser instalado na sua placa Arduino, além das bibliotecas necessárias para a utilização dos sensores e rádio X-Bee.

            A pasta libs contém todas as bibliotecas necessárias. Devem ser movidas para a pasta de bibliotecas do Arduino (normalmente em $HOME/Arduino/libraries).
            No local de instalação do Arduino (eg:$INSTALL = /usr/share/arduino/), remover a pasta Wire de $INSTALL/hardware/arduino/avr/libraries/.

            A pasta zSensNodes contém os arquivos do Arduino:

            O arquivo zSensNodes.ino possui a parte central que aloca todas as libs configuradas no arquivo de configuração.

            O arquivo Config.h contém todas as configurações para habilitar ou desabilitar determinados sensores e suas libs.

            <h3>Banana Pi:</h3>

            A primeira parte a ser configurada é o sistema operacional para o Banana Pi. Existem diversas opções de sistemas operacionais que podem ser instaladas no Banana Pi, porém o Raspbian foi selecionado devido sua extensa documentação, utilização na comunidade e relativa estabilidade.

            Faça o download da versão mais recente do Raspbian compatível com seu Banana Pi
            <a href="http://www.banana-pi.org/download.html"> Banana Pi </a>.

            Em seguida, procure na internet como instalar um SO no Banana Pi, inicialmente no próprio cartão SD.


            <h3>Zabbix:</h3>

            Baixe a versão mais recente dos fontes (Sources) do <a href="http://www.zabbix.com/download.php">Zabbix</a>.

            <!--h3>Bibliotecas</h3>

            <h3>Scripts</h3-->
        </div>
    </section>

    <!-- experience -->
    <section id="sources" class="two">
        <div class="container">

            <header>
                <h2>Exemplos de uso</h2>
            </header>


        </div>
    </section>
</div>

<!-- Footer -->
<div id="footer"> <!--#include file="footer.html" -->
</div>

</body>
</html>

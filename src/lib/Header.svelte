<!-- src/lib/Header.svelte -->
<header>
<span id="header-logo">
    <a href="/" title="Eyes of Silve Photography">
        <img src="/logo-dark.svg" alt="Eyes of Silva Photography logo" title="Eyes of Silva Photography" />
    </a>
</span>

</header>

<style>
    header {
        padding: 25px;
        display: flex;
        justify-content: center;
    }

    #header-logo {
        width: 40%;
        display: inline-block;
    }

    @media (min-width: 768px) {    
        header {
            width: 20%;
            max-width: 260px;
            padding: 40px;
            height: 100vh;
            position: sticky;
            top: 0;
            float: left;
            flex-direction: column;
            justify-content: start;
        }

        #header-logo {
            width: 100%;
        }
    }
</style>
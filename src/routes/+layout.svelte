<script>
  import "../lib/minimal.css";
</script>

<header class="topnav" role="banner">
  <div class="nav-inner">
    <a class="logo" href="/">Brukersystem</a>
    <nav role="navigation" aria-label="Hovednavigasjon">
      <a href="/">Hjem</a>
      <a href="/innlogging">Logg inn</a>
      <a href="/registrering">Registrer</a>
    </nav>
  </div>
</header>

<main class="container">
  <slot />
</main>

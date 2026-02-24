<script>
  export let data;
  let brukernavn = data.brukernavn;
  async function hent_brukere() {
    const respons = await fetch("http://127.0.0.1:5000/brukerdb", {
      method: "POST",
      body: JSON.stringify({ brukernavn }),
      headers: { "Content-Type": "application/json" },
    });
  }
</script>

<h1>Hei {data.tillatelse} {brukernavn}</h1>
<button on:click={hent_brukere}>Hent brukere</button>

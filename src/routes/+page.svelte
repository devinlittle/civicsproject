<script>
  import Card from "$lib/comps/Card.svelte";
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>
    MCAS Free<br/>
		Learning, Not Testing!
	</h1>
</section>

<div class="flexcard">
  <Card/>


  <div class="cardgamer">
    <p>Most students that responded to the servey said that MCAS was a waste of time for students as they can be learning more important topics rather than recapping the moon phases. "We know right now that standardized testing is really disruptive. There are ways of minimizing that disruption" (Eden Mor, gazettenet.com)</p>
  </div>


  <!-- Graph/Graphc for latter -->

  <div class="cardgamer2">
    <p></p>
 <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/TCdxSoAhB9Q?si=uuqabUOWQZLllJ22" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> 
  
  </div>

  <!--   -->
</div>

<!--<div class="svelte">
  {@html leadingup}
</div> !-->

<!-- Card thing 3x with graphs and stuff !-->

<style>
  .flexcard {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
  }

  .cardgamer {
	border-radius: 25px;
	background: var(--color-theme-1);
	padding: 2rem;
	width: 46rem;
	height: 8rem;
	left: 250px;
	position: absolute;
	bottom: 85px;
  }
  
  .cardgamer2 {
	border-radius: 25px;
	position: absolute;
	background: var(--color-theme-1);
	padding: 2rem;
	width: 46rem;
	height: 8rem;
	right: 250px;
	bottom: -200.5px;
  }
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}
</style>

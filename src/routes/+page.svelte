<script>
  import Card from "$lib/comps/Card.svelte";
  import leadingup from "$lib/images/wasteoftime.svg?raw"
  import badbad from "$lib/images/mcasremoved.svg?raw"
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

<p>This project aims to remove the MCAS or provide solutions other than MCAS for Peabody Public Schools in Massachusetts.</p>
</section>

<div class="flexcard">
  <Card/>

  <div class="cardgamer">
    <p style="text-align: center; padding-bottom: 5px; font-weight: bold;">Another issue</p>
    <p>Most students that responded to the servey said that MCAS was a waste of time for students as they can be learning more important topics rather than recapping the moon phases. "We know right now that standardized testing is really disruptive. There are ways of minimizing that disruption" (Eden Mor, gazettenet.com)</p>
  </div>
  <!-- Graph/Graphc for latter -->
  <div class="svgs">
    {@html leadingup}
    {@html badbad}
  </div>

  <div class="cardgamer">
    <p style="text-align: center; padding-bottom: 15px; font-weight: bold;">A solution</p>
    <p>MCAS is a great disruption to everyone, the students doing the test, the students not doing the test, and the teachers who can teach and just sit there doing nothing for a couple of hours. Its a waste of time and not a good one at that. Removing MCAS could fix this problem and remove the standardized testing process. To fill in the gap there might still be a place for standardized tests, but they wouldn't be high-stakes like MCAS. These tests could be shorter, more focused, and used for informational purposes only, not to determine school funding or graduation.<p/>
<!-- <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/TCdxSoAhB9Q?si=uuqabUOWQZLllJ22" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>  -->
  </div>

  <!--   -->
</div>

<h1><a style="color: blue;" href="/resources">Resources used</a></h1>
<!--<div class="svelte">
  {@html leadingup}
</div> !-->

<!-- Card thing 3x with graphs and stuff !-->

<style>

.svgs {
  display: grid;
}

:global(svg#svg15) {
	width: 20rem;
}
:global(svg#svg31) {
	width: 20rem;
}
  .flexcard {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
/*		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;*/
  }

  .cardgamer {
    flex: 0 1 calc(25% - 1em);
	border-radius: 25px;
	background: var(--color-theme-1);
	padding: 2rem;
	/* width: 46rem; */
	/* height: 8rem; */
	/* left: 250px; */
	/* position: absolute; */
	/* bottom: 85px; */
  }
  
/*  .cardgamer2 {
	border-radius: 25px;
	position: absolute;
	background: var(--color-theme-1);
	padding: 2rem;
	width: 46rem;
	height: 8rem;
	right: 250px;
	bottom: -200.5px;
  }*/
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

<!---> $lib/comps/Card.svelte <!-->
<script>
import leadingup from "$lib/images/leadingup.svg?raw";
</script>

<div class="cardele">
  <div class="card">
    <p>Over 75% of students indicated they would feel relieved if MCAS testing were permanently removed. This data suggests that a significant number of students experience negative feelings or stress related to the testing. Additionally, in response to the question, 'How do you feel leading up to MCAS testing?, 51.2% of students reported feeling 'stressed' and 44.8% felt 'annoyed'. These findings imply widespread dissatisfaction and anxiety among students regarding the MCAS testing process.</p>
<!--  <div class="card2"> !-->
    <br/>
    {@html leadingup}  
  </div>

</div>


<!---> Styles <!--> 

<style>

:global(svg#svg22) {
	display: flex;
	padding: 22px;
	height: 13rem;
	width: 20rem;
	position: absolute;
	margin-left: 601px;
	margin-top: -234px;
}

.cardele {
  border-bottom-style: solid;
  border-bottom-width: 100px;
  border-color: transparent;
}
.card {
	border-radius: 25px;
	background: var(--color-theme-1);
	padding: 3rem;
	width: 52rem;
	height: 8rem;
/* 	transform: rotate(-2.5deg); */
}
.card2 {
	border-radius: 50px;
	background: var(--color-theme-1);
	padding: 7.5rem;
	width: 7.5rem;
	height: 3.1rem;
	margin-left: 72%;
	margin-top: -30%;
	transform: rotate(deg);
}
.card3 {
	border-radius: 25px;
	background: var(--color-theme-1);
	padding: 8rem;
	width: 18rem;
	height: 1rem;
	margin-left: -65%;
	margin-top: -49%;
	transform: rotate(-8.2deg);
}

p {
	margin-top: -25px;
	padding-right: 20%;
}

</style>

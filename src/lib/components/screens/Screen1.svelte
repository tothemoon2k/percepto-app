<script>
  import NextBtn from "../NextBtn.svelte";

</script>

<div class="flex w-full h-full absolute">
    <div class="flex px-6 justify-center items-center w-full md:w-1/2 h-full">
        <img class="rounded-2xl aspect-square object-cover object-left w-5/6" src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/rockcms/2023-11/231128-mark-cuban-mb-1351-f8de9a.jpg" alt="">
    </div>

    <div class="pr-16 flex flex-col justify-center w-full md:w-1/2 h-full">
        <h1 class="text-5xl font-bold">
            Objectively Evaluate Your Business Idea in Under 30 Seconds ⏱️
        </h1>
        <p class="mt-1 text-xl text-gray-500">
            Objectively evaluate your business idea based on winning checklists
        </p>

        <textarea class="mt-6 border-2 rounded-2xl pt-3.5 px-5 pb-36 text-wrap" placeholder="A website that allows astronauts to buy affordable rocket boots from Russia via two-day shipping" name="idea" id="idea"></textarea>
        <p class="mt-2.5 text-sm text-gray-500">Absolutely free. No sign up or credit card required.</p>

        <NextBtn text="Next" />
    </div>
</div>
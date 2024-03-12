<script>
    import ChecklistCard from "$lib/components/general/ChecklistCard.svelte";
    import NextBtn from "$lib/components/general/NextBtn.svelte";

    import AlexHormozi from "$lib/assets/AlexHormozi.webp";
</script>

<div class="flex flex-col justify-center items-center w-full fill-height absolute">
    <div class="px-32 md:px-12 lg:px-0 md:mt-28 lg:mt-16">
        <h1 class="mt-10 md:mt-0 text-4xl md:text-5xl font-bold">
            Choose your checklists/criteria 📋
        </h1>
    
        <p class="mt-2 md:mt-1 text-lg md:text-xl text-gray-500">
            Objectively evaluate your business idea based on winning checklists
        </p>
    </div>

    <div class="mt-12 md:mt-10 lg:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <ChecklistCard name="Paul Graham" img={AlexHormozi}/>
        <ChecklistCard name="Alex Hormozi" img={AlexHormozi}/>
        <ChecklistCard name="Paul Graham" img={AlexHormozi}/>
        <ChecklistCard name="Paul Graham" img={AlexHormozi}/>
    </div>

    <button class="mt-6 md:ml-6 md:w-5/6 text-start font-medium underline text-lg cursor-pointer">Create a custom checklist</button>

    <div class="mb-14 mt-10 md:mt-6 md:mr-40 md:self-end flex items-center gap-8">
        <button class="w-fit h-fit text-black text-xl font-medium hover:scale-95 transition-all cursor-pointer">Back</button>
        <NextBtn text="Evaluate"/>
    </div>
</div>
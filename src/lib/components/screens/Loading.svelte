<script>
    //@ts-nocheck
</script>

<div class="flex flex-col justify-center items-center w-full h-5/6 lg:h-full absolute">
    <h1 class="text-2xl md:text-3xl font-semibold mt-5">Evaluating your idea...</h1>

    <div class="w-5/6 md:w-3/5 lg:w-1/2 2xl:w-1/3 mt-8 flex h-1.5 bg-gray-200 rounded-full overflow-hidden" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
        <div class="w-full flex flex-col justify-center rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500 test" ></div>
    </div>
</div>

<style>
    @keyframes test {
        from {
            width: 0;
        }
        to {
            width: 100%;
        }
    }

    .test{
        animation-name: test;
        animation-duration: 44s;
    }
</style>
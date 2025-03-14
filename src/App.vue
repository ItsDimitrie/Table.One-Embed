<template>
    <div class="flex min-h-screen flex-col">
        <!-- Header with blue background -->
        <header class="bg-blue-600 px-6 py-16 text-center text-white">
            <h1 class="mb-2 text-5xl font-bold">{{ extractedName }} Widget</h1>
            <p class="text-xl">Your restaurant id = {{ restoId }}.</p>
        </header>

        <!-- Dark section with embed code -->
        <main class="flex-grow bg-gray-900 px-6 py-12 text-white">
            <div class="mx-auto max-w-3xl">
                <h2 class="mb-8 text-4xl font-bold">Embed code</h2>

                <p class="mb-6 text-gray-300">
                    Paste this code inside the
                    <span class="font-mono text-white">&lt;body&gt;</span> tag
                    of your website.
                </p>

                <!-- Editable fields -->
                <div class="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                        <label
                            class="mb-2 block text-gray-300"
                            for="restoIdInput"
                            >Restaurant ID:</label
                        >
                        <h1
                            class="w-full rounded border border-gray-700 bg-gray-800 px-4 py-2 text-white"
                        >
                            {{ restoId }}
                        </h1>
                    </div>
                    <div>
                        <label
                            class="mb-2 block text-gray-300"
                            for="colorSelect"
                            >Restaurant Name:</label
                        >
                        <h1
                            class="w-full rounded border border-gray-700 bg-gray-800 px-4 py-2 text-white"
                        >
                            {{ extractedName }}
                        </h1>
                    </div>
                </div>

                <p class="text-gray-300">
                    Note that this only changes on your own application where
                    you import the code, not on this page.
                </p>

                <div class="relative overflow-hidden rounded-md bg-gray-800">
                    <pre class="overflow-x-auto p-4 text-sm text-gray-300">
<span class="text-gray-500">1.</span> <span class="text-blue-400">&lt;script&gt;</span>
<span class="text-gray-500">2.</span>     document.addEventListener<span class="text-white">(</span><span class="text-green-400">"DOMContentLoaded"</span><span class="text-white">, </span><span class="text-yellow-400">function</span><span class="text-white"> () {</span>
<span class="text-gray-500">3.</span>         <span class="text-white">(</span><span class="text-yellow-400">function</span><span class="text-white"> (document, script, scriptId) {</span>
<span class="text-gray-500">4.</span>             <span class="text-purple-400">const</span> firstScript = document.getElementsByTagName<span class="text-white">(script)[</span><span class="text-red-400">0</span><span class="text-white">];</span>
<span class="text-gray-500">5.</span>             <span class="text-purple-400">if</span><span class="text-white"> (document.getElementById(scriptId)) </span><span class="text-purple-400">return</span><span class="text-white">;</span>
<span class="text-gray-500">6.</span> 
<span class="text-gray-500">7.</span>             <span class="text-purple-400">const</span> scriptElement = document.createElement<span class="text-white">(script);</span>
<span class="text-gray-500">8.</span>             scriptElement.src = <span class="text-green-400">"https://itsdimitrie.github.io/table.one-widget-test/embed.js"</span><span class="text-white">;</span>
<span class="text-gray-500">10.</span> 
<span class="text-gray-500">11.</span>            firstScript.parentNode?.insertBefore<span class="text-white">(scriptElement, firstScript);</span>
<span class="text-gray-500">12.</span>        <span class="text-white">})(document, </span><span class="text-green-400">"script"</span><span class="text-white">, </span><span class="text-green-400">"reservationWidgetScript"</span><span class="text-white">);</span>
<span class="text-gray-500">13.</span>    <span class="text-white">});</span>
<span class="text-gray-500">14.</span> <span class="text-blue-400">&lt;/script&gt;</span>
<span class="text-gray-500">15.</span> <span class="text-blue-400">&lt;div</span> class=<span class="text-green-400">"widget-data"</span> restoId=<span class="text-green-400">"{{ restoId }}"</span> restoName=<span class="text-green-400">"{{ extractedName }}"</span><span class="text-blue-400">&gt;&lt;/div&gt;</span></pre>
                </div>

                <button
                    class="mt-2 mr-auto ml-auto flex rounded bg-blue-600 px-6 py-3 text-xl font-medium text-white hover:bg-blue-700"
                    @click="copyCode"
                >
                    {{ copyButtonText }}
                </button>
            </div>
        </main>
    </div>
</template>

<script lang="ts">
    import { computed, defineComponent, onBeforeMount, ref } from 'vue';

    export default defineComponent({
        name: 'App',
        setup() {
            const copyButtonText = ref('COPY');
            const restoId = ref('Bistro Van Dimi');
            const color = ref('red');
            const extractedName = ref('Table.One Widget');

            // Parse URL parameters before mounting the component
            onBeforeMount(() => {
                console.log('Current URL:', window.location.href);

                // Get URL parameters
                const urlParams = new URLSearchParams(window.location.search);
                console.log(
                    'URL Parameters:',
                    Object.fromEntries(urlParams.entries()),
                );

                // Get name parameter
                const nameParam = urlParams.get('name');
                if (nameParam) {
                    extractedName.value = decodeURIComponent(nameParam);
                    console.log('Extracted name:', extractedName.value);
                }

                // Get uid parameter
                const uidParam = urlParams.get('uid');
                if (uidParam) {
                    restoId.value = uidParam;
                    console.log('Extracted uid:', restoId.value);
                }
            });

            const codeSnippet = computed(() => {
                return `<script>
    document.addEventListener("DOMContentLoaded", function () {
        (function (document, script, scriptId) {
            const firstScript = document.getElementsByTagName(script)[0];
            if (document.getElementById(scriptId)) return;

            const scriptElement = document.createElement(script);
            scriptElement.src = "https://itsdimitrie.github.io/table.one-widget-test/embed.js";
            // scriptElement.src = "http://localhost:5173/table.one-widget-test/embed.js";

            firstScript.parentNode?.insertBefore(scriptElement, firstScript);
        })(document, "script", "reservationWidgetScript");
    });
<\/script>
<div class="widget-data" restoId="${restoId.value}" color="${color.value}"><\/div>`;
            });

            const copyCode = () => {
                navigator.clipboard.writeText(codeSnippet.value);
                copyButtonText.value = 'COPIED!';
                setTimeout(() => {
                    copyButtonText.value = 'COPY';
                }, 2000);
            };

            return {
                copyButtonText,
                restoId,
                color,
                copyCode,
                extractedName,
            };
        },
    });
</script>

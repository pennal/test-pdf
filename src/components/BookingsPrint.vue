<template>
    <vue-html2pdf
        :show-layout="false"
        :float-layout="true"
        :enable-download="false"
        :preview-modal="true"
        :paginate-elements-by-height="1200"
        filename="test-filename"
        :pdf-quality="2"
        :manual-pagination="false"
        pdf-format="a4"
        pdf-orientation="portrait"
        pdf-content-width="1200px"

        @progress="onProgress($event)"

        ref="renderer"
    >
        <section slot="pdf-content">
            <div style="width: 500px; height: 500px; background-color: red"></div>
        </section>
    </vue-html2pdf>
</template>

<script>
import VueHtml2pdf from 'vue-html2pdf'
export default {
    name: "BookingsPrintDialog",
    components: {
        VueHtml2pdf
    },
    methods: {
        generateReport: function() {
            this.$refs.renderer.generatePdf()
        },
        onProgress: function(event) {
            this.$emit('onProgress', event);
        }
    }
}
</script>
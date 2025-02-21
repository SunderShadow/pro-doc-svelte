<script lang="ts">
    import DoctorListPreview from "../../_parts/assets/doctor-list-preview.png?enhanced&format=webp"
    import {getContext} from "svelte"

    let setPreview = getContext('setPreview')
    setPreview(DoctorListPreview.img.src)
</script>



<style lang="scss">
    .page-container {
      .body-text-1 {
        line-height: 28.8px;
      }
    }
</style>
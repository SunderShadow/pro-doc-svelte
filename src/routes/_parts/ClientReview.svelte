<script lang="ts">
    type Props = {
        title: string,
        description: string,
        author: string,
        authorImage: string,
        rating: number,
    }

    const {
        title,
        description,
        author,
        authorImage,
        rating
    }: Props = $props()

</script>

<div class="review-container">
    <h1>{title}</h1>
    <p>{description}</p>
    <div class="author">
        <img src={authorImage} alt="">
        <p>{author}</p>
        {rating}
    </div>
</div>

<style lang="scss">

</style>
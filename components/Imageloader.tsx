type ImageLoaderProps = {
    src: string,
    width: string,
    quality: string
}

export const imgLoader = ({src, width, quality}: ImageLoaderProps) => {
    return (
        `https://portfolia-dusky.vercel.app/${src}?w=${width}&=${quality}`
    )
}
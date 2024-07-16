import Dropzone from '@/components/Dropzone'

export default function Home() {
  return (
    <main className="pt-12 flex flex-col items-center justify-between gap-12 overflow-hidden">
      <div className="space-y-6">
        <h1 className="text-3xl md:text-5xl font-medium text-center">Free Unlimited File Converter</h1>
        <p className="text-neutral-400 text-md md:text-lg text-center max-w-3xl">
          Introducing FileFlex – your go-to online tool for unlimited and free multimedia conversion, all processed
          locally on your device for enhanced privacy and security. Easily convert images, audio, and videos without any
          restrictions. Start converting now and streamline your content effortlessly with FileFlex!
        </p>
      </div>
      <Dropzone />
    </main>
  )
}

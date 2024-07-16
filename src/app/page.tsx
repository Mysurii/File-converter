import Dropzone from '@/components/Dropzone'

export default function Home() {
  return (
    <main className="pt-12 flex flex-col items-center justify-between gap-12 overflow-hidden">
      <div className="space-y-6">
        <h1 className="text-3xl md:text-5xl font-medium text-center">Free Unlimited File Converter</h1>
        <p className="text-neutral-400 text-md md:text-lg text-center max-w-3xl">
          Introducing Convertly – your go-to online tool for unlimited and free multimedia conversion. Easily convert
          images, audio, and videos without any restrictions. <br />
          All conversions are processed locally on your device, ensuring that we never save or store your data.
        </p>
      </div>
      <Dropzone />
    </main>
  )
}

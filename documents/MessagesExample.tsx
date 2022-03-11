import Image from 'next/image';

export function MessagesExample() {
  const imageSize = 80;
  return (
    <div className="flex flex-col gap-2 w-64 p-2 text-sm lg:w-72 lg:text-base rounded-lg transform rotate-6">
      <div className="p-1 lg:p-2 shadow-xl rounded-lg ml-6 self-end bg-green-100">Oi, como vai?</div>
      <div className="p-1 lg:p-1 shadow-xl rounded-lg ml-6 self-end bg-green-100">
        <div className="bg-black bg-opacity-10 flex flex-row h-20 overflow-hidden">
          <div className="">
            <Image
              src="/landing/thumb.jpg"
              height={imageSize}
              width={imageSize}
              objectFit="cover"
            />
          </div>
          <div className="p-2 flex-1 flex flex-col">
            <div className="font-bold overflow-ellipsis">Echeveria orion</div>
            <div className="flex-1 text-sm overflow-ellipsis">Estou podando dessa suculenta, se alguém quiser, é dizer o endereço que eu envio por carta</div>
          </div>
        </div>
        <div className="lg:p-1">
          ainda tem muda dessa pra doar?
        </div>
      </div>
      <div className="p-1 lg:p-2 shadow-xl rounded-lg mr-6 self-start bg-gray-100">tenho sim!</div>
    </div>
  );
}

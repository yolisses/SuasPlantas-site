import Image from 'next/image';

export function MessagesExample() {
  const imageSize = 80;
  return (
    <div className="flex flex-col gap-2 w-64 p-2 text-sm rounded-lg transform rotate-6 my-3">
      <div className="p-1 shadow-lg rounded-lg ml-6 self-end bg-green-100">Oi, como vai?</div>
      <div className="p-1 shadow-lg rounded-lg ml-6 self-end bg-green-100">
        <div className="bg-black bg-opacity-10 flex flex-row">
          <div>
            <Image
              src="/landing/thumb.jpg"
              height={imageSize}
              width={imageSize}
              objectFit="cover"
            />
          </div>
          <div className="p-2 flex-1 h-20 overflow-y-hidden flex flex-col">
            <div className="font-bold">Echeveria orion</div>
            <div className="overflow-ellipsis flex-1">Estou podando essa suculenta, se alguém quiser, é dizer o endereço que eu envio por carta</div>
          </div>
        </div>
        <div>
          ainda tem muda dessa pra doar?
        </div>
      </div>
      <div className="p-1 shadow-lg rounded-lg mr-6 self-start bg-gray-100">tenho sim!</div>
    </div>
  );
}

import { ImageInputCustomRef, ImagesInput } from '../images/ImagesInput';
import { getFileFromImageUrl } from '../upload/getFileFromImageUrl';
import { Sending } from '../upload/Sending';

export function DevPage() {
  const customRef: ImageInputCustomRef = { };

  const fakeImage = 'https://upload.wikimedia.org/wikipedia/commons/7/72/Coisa_Nossa%2C_Santana_do_Livramento.jpg';

  return (
    <div>
      <button onClick={async () => {
        if (customRef.current) {
          const file = await getFileFromImageUrl(fakeImage);
          customRef.current.addSending(
            new Sending(
              {
                file,
                onUpdate: () => { console.log('update'); },
              },
            ),
          );
        }
      }}
      >
        mágica
      </button>
      <ImagesInput
        customRef={customRef}
        onBlur={(e) => console.log(e)}
        onChange={(e) => console.log(e)}
      />
    </div>
  );
}

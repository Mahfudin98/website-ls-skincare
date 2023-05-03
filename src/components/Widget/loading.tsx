interface LoadingProps {
  show: boolean;
}

export default function LoadingPage(props: LoadingProps) {
  const { show } = props;

  return (
    <div
      className={`w-full flex justify-center items-center ${
        show ? "" : "hidden"
      }`}
    >
      {/* loading */}
      <div className="loadingio-spinner-radio-bkcwab6bxgi">
        <div className="ldio-lkhdq13mx9d bg-white">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

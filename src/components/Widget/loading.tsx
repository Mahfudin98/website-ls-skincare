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
      <div className="loadingio-spinner-magnify-7kbm3962nj8">
        <div className="ldio-v3y1xk1q5om">
          <div>
            <div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Input({ title, inputImage, value, onChange, error }) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <label className="text-sm text-grey">{title}</label>
        {error && <span className="text-red text-sm">{error}</span>}
      </div>
      <div className="flex h-12 items-center justify-between rounded-md border-2 border-very_light_grey bg-very_light_grey px-5 hover:cursor-pointer hover:border-primary">
        <img src={inputImage} alt="" className="h-4" />
        <input
          onChange={onChange}
          value={value}
          type="text"
          className="max-w-24 appearance-none bg-very_light_grey text-end text-secondary outline-none"
          placeholder="0"
        />
      </div>
    </div>
  );
}

export default Input;

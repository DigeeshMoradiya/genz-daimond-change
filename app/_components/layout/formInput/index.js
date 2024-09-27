export default function FormInput({ name, type = "text", label = "Label", placeholder = "" }) {
    return (
        <div className="mb-4" >
            <label for={name} className="block text-sm font-medium text-[#666666]">{label}</label>
            <input type={type} className="mt-1 block w-full p-3 border border-[#66666659] focus:outline-none sm:text-sm" placeholder={placeholder} />
        </div >
    )
}
import Title from "./Title";

const Contact = () => {
  return (
    <div className=" flex justify-center items-center flex-col p-10" id="contact">
        <Title title={"Contactez moi"}/>
      <form action="https://api.web3forms.com/submit" method="POST" className="flex flex-col w-full gap-4 md:w-1/3 p-5 bg-base-300 rounded-lg shadow-lg my-10">
      <input type="hidden" name="access_key" value="6e6bbde7-fa3b-4b76-8b40-baee5266a9bf"></input>
        <div>
          <label >Nom</label> <br />
          <input
            type="text"
            name="Nom"
            className=" input input-bordered w-full rounded-sm"
            placeholder="Entrer votre nom..."
            required
          />
        </div>
        <div>
          <label className=" text-left">E-mail</label> <br />
          <input
            type="text"
            name="Email"
            className=" input input-bordered w-full rounded-sm"
            placeholder="Entrer votre e-mail..."
            required
          />
        </div>
        

        <textarea name="message" className=" textarea resize-none w-full rounded-sm" placeholder="Message..." required></textarea>

        <button className="btn btn-secondary w-full rounded-sm">Envoyer</button>
      </form>
    </div>
  );
};

export default Contact;

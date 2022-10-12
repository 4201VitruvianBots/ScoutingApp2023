import './App.css';
import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {signedIn: false};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        const answers = e.target.elements;
        console.log(answers);
        this.setState({signedIn: true, name: answers.name.value, event: answers.event.value});
    }

    render() {
        return (
            <main>
                <h1>Scouting PASS</h1>
                {
                    this.state.signedIn ?
                    (<div className="content">
                        <p>Name: {this.state.name}</p>
                        <p>Event: {this.state.event}</p>
                    </div>) :
                    <SignIn onSubmit={this.handleSubmit} />
                }
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mi nunc, vulputate eget cursus nec, blandit tempor velit. Proin volutpat varius imperdiet. Aliquam quis viverra libero. Praesent est ligula, imperdiet at eleifend vel, tincidunt vel erat. Nulla ornare orci sed luctus finibus. Curabitur aliquet consequat eros sed aliquam. Quisque eget augue lacinia, ultrices nisi non, varius velit. Aliquam a lacus vulputate, fermentum ipsum ultricies, scelerisque ipsum. Etiam sodales sed magna vitae viverra. Morbi rhoncus ex ut nunc iaculis, eu rhoncus ligula porta. Sed auctor nec enim et vestibulum. Duis euismod nisl nec malesuada fringilla. Mauris semper aliquam efficitur. Donec eleifend rutrum consequat. Proin sagittis ante ante, id imperdiet ipsum mollis nec. Vestibulum sed felis commodo, scelerisque risus vitae, blandit ligula.</p>
                <p>Etiam sit amet pellentesque nisi. Morbi vestibulum, enim quis rhoncus convallis, massa ligula sollicitudin enim, vel aliquam leo justo euismod risus. Pellentesque iaculis ornare libero, ut luctus arcu accumsan eu. Fusce ut ex non lectus gravida auctor. Sed volutpat maximus quam. In nec neque congue nisl sollicitudin tincidunt sit amet ac odio. Donec in blandit leo, quis aliquet turpis. Nulla placerat enim ac lectus iaculis egestas.</p>
                <p>Suspendisse potenti. Integer commodo imperdiet feugiat. Vivamus in ex eget odio bibendum varius. Fusce at congue nisi, a consectetur leo. Quisque aliquet blandit enim, non scelerisque elit pretium et. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce nisl turpis, iaculis id nulla non, placerat malesuada tortor. Sed vestibulum scelerisque augue, nec accumsan diam ultricies eu. Vivamus convallis volutpat lorem. Proin consectetur elit a magna faucibus malesuada. Sed nec est vulputate nisl viverra convallis.</p>
                <p>Nunc vitae mi scelerisque, blandit ligula eget, viverra lectus. Etiam ac maximus leo, et congue enim. Pellentesque accumsan, arcu sed facilisis dictum, quam magna gravida elit, ut blandit mi purus vel ligula. In eget mauris mi. Suspendisse iaculis quam erat, in malesuada ante vestibulum vel. Donec rutrum viverra bibendum. Praesent lacinia dolor sit amet velit porta, a imperdiet velit fermentum. Aenean pharetra libero ut lacinia sagittis. Suspendisse mattis consequat consectetur. Vestibulum bibendum velit eget eleifend pulvinar. Nunc hendrerit, eros sit amet vulputate sodales, urna orci luctus nisl, quis rhoncus quam elit nec dolor. Aliquam erat volutpat. Vestibulum ornare velit posuere vestibulum auctor. Maecenas placerat egestas dolor suscipit lobortis.</p>
                <p>Quisque tempus varius orci, sed pellentesque elit accumsan vitae. Integer sit amet lectus eros. Sed pellentesque eros eros, sit amet blandit erat tempus in. Mauris bibendum felis mauris, sed aliquam metus ullamcorper eget. Vestibulum ultricies ante quis mauris fermentum ullamcorper. Donec quis nibh nec sem hendrerit scelerisque. In accumsan porttitor interdum. Vivamus faucibus tellus nec nisl vestibulum, nec vestibulum enim viverra. Quisque placerat, arcu ut posuere mollis, urna orci interdum erat, sit amet dictum urna neque vitae erat. Aenean quis mi luctus, fermentum erat at, blandit odio.</p>
                <p>Quisque nec eros ipsum. Aenean quis efficitur augue. Vestibulum egestas laoreet lacus, a vulputate leo varius sit amet. Quisque magna lectus, tincidunt sit amet scelerisque sit amet, tincidunt dapibus ex. Nunc semper leo luctus leo feugiat, at ultricies neque ullamcorper. Pellentesque sed mollis justo, nec blandit lacus. Quisque ac convallis nisl. Donec consequat nunc eget interdum feugiat.</p>
                <p>Mauris pretium blandit ipsum, at sodales augue viverra nec. Maecenas nec suscipit lacus. Suspendisse et dapibus neque. Sed tincidunt lectus a augue mollis rhoncus. Cras porta enim convallis, feugiat lectus vitae, interdum risus. Vivamus iaculis sed lacus sed mollis. Nunc eu iaculis turpis. Etiam vitae dolor nunc.</p>
                <p>Sed lobortis, turpis cursus facilisis ultricies, elit leo dapibus sem, et lacinia magna leo et lacus. In eget rhoncus diam, vitae cursus erat. Cras a nisi turpis. Aenean placerat iaculis erat, nec aliquam libero suscipit non. Nunc aliquam vulputate purus, in laoreet dolor vehicula vel. Ut placerat egestas enim, a tincidunt augue gravida vel. Nulla facilisi. Etiam in felis in magna porta laoreet.</p>
                <p>Vivamus semper tempor turpis, non porta nisl iaculis id. Donec metus justo, vulputate vel vehicula sed, convallis quis eros. Sed quis placerat velit. Cras maximus nisl nibh, sit amet interdum nunc posuere eu. Ut elementum, libero eget aliquam facilisis, ante dolor dignissim ipsum, sed varius dolor eros eu lectus. Sed dictum turpis vitae massa condimentum, sed pulvinar nisi vehicula. Curabitur in lacus eget orci suscipit varius sed vel odio. Aenean cursus velit lacus, finibus gravida quam dignissim ullamcorper. Aliquam semper, lorem eu viverra finibus, mi eros imperdiet massa, id pretium enim sapien at arcu. Donec nec lacinia augue. Quisque suscipit eleifend massa vitae laoreet. Vestibulum non convallis urna. Quisque molestie aliquam odio, eu sollicitudin dolor mollis laoreet. Phasellus fermentum placerat efficitur. Pellentesque cursus quam lectus, vitae vehicula lorem ultricies ullamcorper. Curabitur gravida, dui a maximus dapibus, purus massa pellentesque libero, ac pharetra nulla magna sed augue.</p>
                <p>Nunc ullamcorper justo quam, a commodo arcu porttitor a. Quisque ac ultrices dolor. Proin quam neque, molestie et nulla a, viverra scelerisque dolor. Duis vitae leo luctus velit pellentesque pulvinar vel non urna. Praesent dictum, eros placerat pretium auctor, dolor nibh elementum magna, eu mattis nulla quam id velit. Pellentesque eget erat fermentum, auctor turpis a, pellentesque nisi. Vestibulum laoreet tortor vel posuere cursus. Aliquam auctor ipsum ac lectus vestibulum molestie.</p>
                <p>Cras dolor tortor, convallis sit amet semper sit amet, blandit id ligula. Vivamus lobortis volutpat quam, eu blandit diam euismod et. Phasellus tempus mauris enim. Praesent et volutpat tellus. Ut consectetur eget metus quis sodales. Duis eget eleifend lacus. Curabitur pulvinar a dui malesuada condimentum. Quisque non pulvinar lacus. Aenean fringilla a risus id ullamcorper. Nulla non scelerisque diam. Morbi vulputate urna et lobortis aliquet. In vitae porta diam. Duis pretium ut lectus in ornare. Ut nec ultricies metus. Suspendisse ut mi nisl. In vitae sem non nibh blandit varius.</p>
                <p>Aliquam lorem dui, malesuada non risus ut, vulputate maximus diam. Praesent commodo malesuada fermentum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur pellentesque ipsum nisi, sed maximus metus mattis sed. In maximus odio interdum, tempor libero sit amet, pharetra velit. Pellentesque vulputate orci pulvinar lectus tempus eleifend. Sed feugiat porttitor ligula id feugiat. Fusce at sollicitudin nulla. Nunc lobortis elementum purus, id pellentesque ligula fringilla sed.</p>
                <p>Sed accumsan molestie nibh in imperdiet. Mauris non luctus lacus. Suspendisse lacinia sodales tellus eget pharetra. In hac habitasse platea dictumst. Sed vestibulum, sapien ac ullamcorper porttitor, nibh enim dapibus nulla, at maximus dui massa sed lorem. Nunc facilisis pellentesque efficitur. Duis congue massa tellus, ac ultricies arcu sollicitudin vel. Ut lectus arcu, aliquet quis tincidunt at, placerat at lorem. Aenean urna velit, ornare at lacus nec, porttitor tempus nisi. Mauris eleifend elit in convallis mattis. Sed aliquam tincidunt facilisis.</p>
                <p>Ut eget enim at mi pulvinar elementum vitae sed dui. Maecenas mauris velit, semper a ultricies in, dictum at lorem. Vivamus ullamcorper fringilla ante posuere posuere. Ut et facilisis risus, ut dignissim erat. Suspendisse semper lorem sit amet lacus maximus, malesuada eleifend arcu blandit. In hac habitasse platea dictumst. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus posuere pulvinar tellus, ac mollis nulla ultricies vel. Cras sem tortor, volutpat faucibus bibendum nec, dictum sed dui. Aliquam finibus mi metus, at pellentesque lorem vulputate a. Phasellus eget tortor urna. Aenean ante nibh, mollis eget leo et, condimentum lacinia nunc. Nullam nec lectus auctor dui vulputate cursus.</p>
                <p>Nullam nec velit erat. Vestibulum consectetur congue sollicitudin. Proin interdum mi eu purus fringilla placerat. Vestibulum a massa erat. Aliquam tempus lorem et massa rhoncus imperdiet. Sed eget egestas metus, eu ullamcorper enim. Integer dignissim gravida malesuada. Nam a scelerisque leo. Curabitur ullamcorper erat a iaculis auctor. Praesent in cursus elit. Nam consectetur bibendum nunc, non porttitor enim euismod vitae. Morbi feugiat nisl enim, sit amet porta ante rutrum vel. Curabitur euismod sagittis orci, finibus gravida libero maximus ut.</p>
                <p>Sed bibendum lectus malesuada, pretium elit vel, maximus nibh. Sed tempus convallis lacus at bibendum. Ut lectus tellus, varius eu fringilla vel, venenatis sed ipsum. Etiam sagittis imperdiet urna vitae blandit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer at ex eros. Fusce elementum ipsum metus, nec tincidunt enim pharetra quis. Mauris eu consequat velit. Cras et nunc eu tortor condimentum faucibus. Quisque sed ornare eros, nec aliquam sem. Phasellus efficitur egestas condimentum. Maecenas cursus turpis purus, sit amet euismod nisl eleifend a.</p>
                <p>Donec et risus quis tellus faucibus posuere ut in est. Ut aliquam libero ipsum, ut scelerisque arcu viverra quis. Quisque posuere fringilla varius. Nunc dapibus scelerisque justo. Aenean venenatis accumsan justo et efficitur. Nulla finibus nisi finibus dolor pellentesque, sed suscipit elit consectetur. Nunc rhoncus, arcu nec auctor efficitur, libero leo tempus dui, at gravida nunc lorem at lorem. Cras quis blandit lectus.</p>
                <p>Integer sit amet posuere nulla. Sed tempus erat ut nunc egestas, non rutrum lectus euismod. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut in nulla nisl. Suspendisse sit amet libero quis felis efficitur imperdiet at non purus. Nulla aliquam molestie elementum. Suspendisse malesuada nulla ornare dolor rhoncus gravida. Aenean ac sapien in augue cursus consequat. Sed finibus pretium aliquam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum ultricies malesuada tempor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean et felis vulputate, cursus elit eu, tempor odio. Quisque ullamcorper viverra tempus. Pellentesque imperdiet porttitor cursus.</p>
                <p>Nullam eget mi sem. Donec varius tortor ac auctor gravida. Quisque commodo vestibulum ex, vel mollis est aliquet ac. Fusce dignissim eu dolor ac dignissim. Nullam efficitur ante in sem posuere, sed blandit risus tincidunt. Morbi molestie, magna eget dapibus tempor, elit purus maximus sapien, maximus posuere sem velit ac eros. Nulla justo tortor, sodales a odio sit amet, semper elementum ligula. Pellentesque porttitor sit amet sapien id pulvinar. Fusce at rhoncus nibh, feugiat dapibus dolor.</p>
                <p>Donec ullamcorper pretium consequat. Donec commodo tempor laoreet. Etiam rutrum, ipsum interdum lobortis tempor, elit felis dapibus enim, et dictum urna arcu eget leo. Mauris blandit, tellus id efficitur suscipit, sem purus vulputate risus, vel tincidunt elit nisi vel lacus. Praesent porta urna sit amet ante mattis, at laoreet justo faucibus. Pellentesque in elit libero. Donec non velit varius, facilisis ipsum quis, sollicitudin eros. Donec quis scelerisque nibh. Fusce scelerisque lectus ut nulla bibendum venenatis.</p>
            </main>
        );
    }
}

class SignIn extends React.Component {
    render() {
        return (
            <div className="content">
                <div className="overlay"></div>
                <div className="popup">
                    <form onSubmit={this.props.onSubmit}>
                        <h2>Sign In</h2>
                        <p><label htmlFor="name">Name</label><input type="text" name="name" /></p>
                        <p><label htmlFor="event">Event</label><input type="text" name="event" /></p>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        );
    }
}

// class Question extends React.Component {
//     constructor(props) {
//         super(props);


export default App;

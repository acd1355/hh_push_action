class GitCommand {
    constructor(working_directory){
        this.working_directory = working_directory;
    }
    //Command: git init 
    init(){
        this.staging = [];
        this.local_repository = [];
        return "Initialized as empty Git repository.";
    }

    //Command: git status
    status(){        
        let keys = Object.keys(this.working_directory.files);
        let numChange = keys.length;
        let strChange = `You have ${numChange} change/s.\n`

        for(let i = 0; i < numChange; i++){
            strChange += `${keys[i]}`;

            if(i < numChange - 1){
                strChange += `\n`;
            }
        }
        
        return strChange;
    }

    //Command: git add <filename/file directory/wildcard> 
    add(path_file){
        let modified_files = this.working_directory.new_changes;
        
        if(modified_files[path_file]){
            this.staging.push(modified_files[path_file]);
            delete modified_files[path_file];
        }

        // this is a random comment to test github action
    }

    //Command: git commit -m "<message>"
    commit(message){
        let test = null; // this line is a random code to test github workflow

        if(this.staging.length > 0){
            this.local_repository.push({ "message": message, "files": this.staging });
            this.staging = [];
            return "Done committing to local repository.";
        }
        return "Nothing to commit.";
    }

    //Command: git push
    push(){   
        if(this.local_repository.length > 0){
            return "Done pushing to remote repository.";
        } 
        else {
            return "Nothing to push. No committed file found.";
        }     
    }
}


module.exports = GitCommand;

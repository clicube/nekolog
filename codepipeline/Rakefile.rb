STACK_NAME = 'nekolog-codepipeline'
PROFILE = 'nekolog-codepipeline-admin'
TEMPLATE_FILE = 'cfn.yml'
BASE_CMD = 'aws cloudformation $COMMAND$ --template-body file://$TEMPLATE_FILE$ --profile $PROFILE$'
PROC_OPTIONS =  ' --stack-name $STACK_NAME$ --capabilities CAPABILITY_IAM --parameters ParameterKey=GitHubOAuthToken,ParameterValue=$GITHUB_OAUTH_TOKEN$'

PARAMETER_MAP = {
    '$TEMPLATE_FILE$' => TEMPLATE_FILE,
    '$PROFILE$' => PROFILE,
    '$STACK_NAME$' => STACK_NAME,
    '$GITHUB_OAUTH_TOKEN$' => File.open('GitHubOAuthToken').read
}

def replace_command(str, cmd)
    str.gsub('$COMMAND$', cmd)
end

def replace_parameters(str)
    result = str
    PARAMETER_MAP.each do |key, val|
        result = result.gsub(key, val)
    end
    return result
end

task :validate do
    cmd = BASE_CMD
    cmd = replace_command(cmd, 'validate-template')
    cmd = replace_parameters(cmd)
    sh cmd
end

task :create => :validate do
    cmd = BASE_CMD + PROC_OPTIONS
    cmd = replace_command(cmd, 'create-stack')
    cmd = replace_parameters(cmd)
    sh cmd
end

task :update => :validate do
    cmd = BASE_CMD + PROC_OPTIONS
    cmd = replace_command(cmd, 'update-stack')
    cmd = replace_parameters(cmd)
    sh cmd
end

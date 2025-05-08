
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CloudIcon, ShieldCheck, Code, Rocket, Lock, GitBranch } from "lucide-react";

const DevSecOpsSection = () => {
  return (
    <div className="bg-white py-12 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-starbucks-darkGreen">DevSecOps on AWS</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our secure deployment pipeline ensures quality and security at every step of the development lifecycle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="border-t-4 border-t-starbucks-green">
            <CardHeader className="flex flex-row items-center gap-4">
              <ShieldCheck className="h-8 w-8 text-starbucks-green" />
              <CardTitle>Security First</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Automated security scanning</li>
                <li>AWS WAF implementation</li>
                <li>Secrets management</li>
                <li>Container image scanning</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-t-starbucks-green">
            <CardHeader className="flex flex-row items-center gap-4">
              <CloudIcon className="h-8 w-8 text-starbucks-green" />
              <CardTitle>AWS Infrastructure</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>ECS with Fargate</li>
                <li>Application Load Balancer</li>
                <li>Auto Scaling Groups</li>
                <li>S3 for static assets</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-t-starbucks-green">
            <CardHeader className="flex flex-row items-center gap-4">
              <Rocket className="h-8 w-8 text-starbucks-green" />
              <CardTitle>CI/CD Pipeline</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>GitHub Actions workflows</li>
                <li>Blue/Green deployments</li>
                <li>Automated testing</li>
                <li>Rollback capabilities</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gray-50 border-none">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-4 text-starbucks-darkGreen">DevSecOps Pipeline Flow</h3>
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex flex-col items-center text-center p-4">
                <Code className="h-10 w-10 text-starbucks-green mb-2" />
                <h4 className="font-semibold">Code</h4>
                <p className="text-sm text-gray-600">Write secure code with pre-commit hooks</p>
              </div>
              <div className="hidden md:block text-gray-400">→</div>
              <div className="flex flex-col items-center text-center p-4">
                <GitBranch className="h-10 w-10 text-starbucks-green mb-2" />
                <h4 className="font-semibold">Build</h4>
                <p className="text-sm text-gray-600">Automated builds with security scanning</p>
              </div>
              <div className="hidden md:block text-gray-400">→</div>
              <div className="flex flex-col items-center text-center p-4">
                <Lock className="h-10 w-10 text-starbucks-green mb-2" />
                <h4 className="font-semibold">Test</h4>
                <p className="text-sm text-gray-600">Automated security and unit tests</p>
              </div>
              <div className="hidden md:block text-gray-400">→</div>
              <div className="flex flex-col items-center text-center p-4">
                <Rocket className="h-10 w-10 text-starbucks-green mb-2" />
                <h4 className="font-semibold">Deploy</h4>
                <p className="text-sm text-gray-600">Secure deployment to AWS</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DevSecOpsSection;

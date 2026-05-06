'use client';

import { useState, useEffect } from 'react';
import { Terminal, Copy, Check } from 'lucide-react';

const commands = [
  {
    cmd: 'priyanshu@devops:~$ whoami',
    output: 'Full-Stack DevOps Engineer | AWS | Kubernetes | CI/CD',
  },
  {
    cmd: 'priyanshu@devops:~$ docker ps -a',
    output:
      'CONTAINER ID   IMAGE                  STATUS\n2f4a5b8c9d0e   node:latest           Up 2 days\n5e6f7g8h9i0j   postgres:15          Up 1 week\n9k0l1m2n3o4p   nginx:alpine         Up 5 days',
  },
  {
    cmd: 'priyanshu@devops:~$ kubectl get pods -A',
    output:
      'NAMESPACE     NAME                                READY   STATUS\nkube-system   coredns-76f75df574-2r5h9             1/1     Running\ndefault       web-app-deployment-5d4f7c8b9-2m4x6   3/3     Running\ndefault       db-postgres-0                         1/1     Running',
  },
  {
    cmd: 'priyanshu@devops:~$ git log --oneline -5',
    output:
      '7a3f5b2 (HEAD -> main) Deploy CI/CD pipeline v2.1\n9c2e8d1 Optimize Kubernetes manifests\n4f1a6e9 Add monitoring with Prometheus\n8b5d3c7 Update Docker base images\n2e9a4b1 Fix deployment security issues',
  },
  {
    cmd: 'priyanshu@devops:~$ curl https://api.example.com/stats',
    output:
      '{\n  "uptime": "99.99%",\n  "deployments": 342,\n  "active_containers": 156,\n  "avg_response_time": "125ms"\n}',
  },
];

export function TerminalSection() {
  const [selectedCmd, setSelectedCmd] = useState(0);
  const [copied, setCopied] = useState(false);
  const [displayedOutput, setDisplayedOutput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    setDisplayedOutput('');
    setIsTyping(true);
    const timer = setTimeout(() => {
      setDisplayedOutput(commands[selectedCmd].output);
      setIsTyping(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [selectedCmd]);

  const handleCopy = () => {
    navigator.clipboard.writeText(commands[selectedCmd].cmd.replace(/^[\w@:~$\s]+/, ''));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-16 sm:py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="space-y-2 sm:space-y-3 mb-10 sm:mb-12">
          <p className="text-blue-500 font-semibold text-xs sm:text-sm uppercase tracking-wide">Interactive Demo</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">Linux Terminal Experience</h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl">
            Explore my DevOps workflow through an interactive terminal demonstration.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Command List */}
          <div className="space-y-1.5 sm:space-y-2 order-2 lg:order-1">
            {commands.map((cmd, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedCmd(idx)}
                className={`w-full text-left p-2.5 sm:p-3 rounded-lg transition duration-200 ${
                  selectedCmd === idx
                    ? 'bg-blue-500 text-white'
                    : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                <div className="font-mono text-xs truncate">
                  $ {cmd.cmd.split('$ ')[1]?.split(' ')[0]}...
                </div>
                <div className={`text-xs mt-1 ${selectedCmd === idx ? 'opacity-90' : 'text-muted-foreground'}`}>
                  {cmd.output.split('\n')[0].substring(0, 30)}...
                </div>
              </button>
            ))}
          </div>

          {/* Terminal Display */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            <div className="bg-slate-900 rounded-lg border border-slate-700 overflow-hidden">
              {/* Terminal Header */}
              <div className="bg-slate-800 px-3 sm:px-4 py-2 sm:py-3 flex items-center justify-between border-b border-slate-700">
                <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
                  <Terminal className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-green-500 flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-mono text-slate-300 truncate">priyanshu@devops</span>
                </div>
                <button
                  onClick={handleCopy}
                  className="p-1.5 sm:p-1 hover:bg-slate-700 rounded transition flex-shrink-0"
                  title="Copy command"
                >
                  {copied ? (
                    <Check className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-green-500" />
                  ) : (
                    <Copy className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-slate-400" />
                  )}
                </button>
              </div>

              {/* Terminal Content */}
              <div className="p-3 sm:p-4 space-y-2 sm:space-y-3 min-h-48 sm:min-h-64 max-h-80 overflow-auto font-mono text-xs sm:text-sm">
                {/* Command */}
                <div>
                  <div className="text-green-500 break-words">
                    {commands[selectedCmd].cmd}
                    <span className="animate-pulse">▮</span>
                  </div>
                </div>

                {/* Output */}
                <div className="text-slate-300 space-y-0.5 sm:space-y-1 break-words">
                  {displayedOutput.split('\n').map((line, idx) => (
                    <div key={idx} className={isTyping && idx === 0 ? 'animate-pulse' : ''}>
                      {line}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Tips */}
            <div className="mt-3 sm:mt-4 p-3 sm:p-4 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900 rounded-lg">
              <p className="text-xs sm:text-sm text-blue-900 dark:text-blue-200">
                <span className="font-semibold">Tip:</span> Click on commands above to see different DevOps operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
